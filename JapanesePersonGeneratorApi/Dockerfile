#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
RUN dotnet new webapi -o app
RUN dotnet dev-certs https
COPY ["JapanesePersonGeneratorApi/JapanesePersonGeneratorApi.csproj", "JapanesePersonGeneratorApi/"]
RUN dotnet restore "JapanesePersonGeneratorApi/JapanesePersonGeneratorApi.csproj"
COPY . .
WORKDIR "/src/JapanesePersonGeneratorApi"
RUN dotnet build "JapanesePersonGeneratorApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "JapanesePersonGeneratorApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
ENV ASPNETCORE_URLS="https://*:443;http://*:80"
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=build /root/.dotnet/corefx/cryptography/x509stores/my/* /root/.dotnet/corefx/cryptography/x509stores/my/
ENTRYPOINT ["dotnet", "JapanesePersonGeneratorApi.dll"]