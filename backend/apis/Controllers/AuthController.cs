using apis.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace apis.Controllers
{
    public class AuthController : ControllerBase
    {
        [HttpPost("register")]
        public ActionResult<RegisterResult> RegisterUser(RegisterDto register, int j, bool k)
        {
            RegisterResult registerResult = new RegisterResult
            {
                IsSuccess = true
            };

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
