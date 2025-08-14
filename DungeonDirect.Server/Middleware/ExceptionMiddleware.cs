

using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Text.Json;

namespace DungeonDirect.Server.Middleware
{
    public class ExceptionMiddleware(IHostEnvironment env, ILogger<ExceptionMiddleware> logger) : IMiddleware
    {

        //wrap downstream pipeline in try/catch
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (System.Exception ex) 
            {
                await HandleException(context, ex);
            }
        }

        //logs exception with stack trace
        private async Task HandleException(HttpContext context, Exception ex)
        {
            logger.LogError(ex, ex.Message);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            var response = new ProblemDetails
            {
                Status = 500,
                Detail = env.IsDevelopment() ? ex.StackTrace.ToString() : null,
                Title = ex.Message
            };

            var options = new JsonSerializerOptions
            { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

            var json = JsonSerializer.Serialize(response, options);

            await context.Response.WriteAsync(json);
        }
    }
}
