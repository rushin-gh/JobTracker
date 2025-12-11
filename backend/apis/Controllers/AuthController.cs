using apis.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace apis.Controllers
{
    public class AuthController : ControllerBase
    {
        [HttpPost("register")]
        public ActionResult<RegisterResult> RegisterUser([FromBody]RegisterDto register)
        {
            RegisterResult registerResult = new RegisterResult
            {
                IsSuccess = true
            };

            // TODO - make this utility function
            if (!ModelState.IsValid)
            {
                var errMsg = string.Join(" | ",
                        ModelState
                            .Where(item1 => item1.Value.Errors.Any())
                            .Select(item2 =>
                            {
                                return $"{item2.Key} - {string.Join(", ", item2.Value.Errors.Select(item3 => item3.ErrorMessage).ToList())}";
                            }).ToList()
                        );

                registerResult.Message = errMsg;
                registerResult.IsSuccess = false;

                return BadRequest(registerResult);
            }

            // Push the user to the database with encrypted password



            if (registerResult.IsSuccess)
            {
                registerResult.Message = "User registered successfully";
            }
            else
            {
                registerResult.Message = "Error while registering user!";
            }
            return Ok(registerResult);
        }
    }
}
