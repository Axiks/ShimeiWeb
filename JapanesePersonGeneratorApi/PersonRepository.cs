using JapaneseNameGenerator;
using JapaneseNameGenerator.Models;

namespace JapanesePersonGeneratorApi
{
    public class PersonRepository
    {
        private ShimeiGenerator _shimeiGenerator;

        public PersonRepository()
        {
            _shimeiGenerator = new ShimeiGenerator();
        }

        public async Task<JpName> GetRandomNameAsync()
        {
            var randomPerson = await _shimeiGenerator.GetRandomPerson();
            return randomPerson.Name;
        }

        public async Task<JpName> GetRandomSurnameAsync()
        {
            var randomPerson = await _shimeiGenerator.GetRandomPerson();
            return randomPerson.Surname;
        }

        public async Task<Person> GetRandomPersonAsync()
        {
            var randomPerson = await _shimeiGenerator.GetRandomPerson();
            return randomPerson;
        }
    }
}
