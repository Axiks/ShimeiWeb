using JapaneseNameGenerator.Models;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace JapanesePersonGeneratorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private PersonRepository _personRepository;
        public PersonController() {
            _personRepository = new PersonRepository();
        }

        [HttpGet("getName")]
        [SwaggerResponse(StatusCodes.Status200OK, Type = typeof(string))]
        public async Task<IActionResult> GetName()
        {
            var randomNameObj =  await _personRepository.GetRandomNameAsync();
            var romanjiName = randomNameObj.RomanjiName;
            return Ok(romanjiName);
        }

        [HttpGet("getSurname")]
        [SwaggerResponse(StatusCodes.Status200OK, Type = typeof(string))]
        public async Task<IActionResult> GetSurname()
        {
            var randomSurnameObj = await _personRepository.GetRandomSurnameAsync();
            var romanjiSurname = randomSurnameObj.RomanjiName;
            return Ok(romanjiSurname);
        }

        [HttpGet("getFullName")]
        [SwaggerResponse(StatusCodes.Status200OK, Type = typeof(Person))]
        public async Task<IActionResult> GetFullname()
        {
            var randomPerson = await _personRepository.GetRandomPersonAsync();
            return Ok(randomPerson);
        }
    }
}
