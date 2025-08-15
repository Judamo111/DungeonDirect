using DungeonDirect.Server.Data.seeders;
using DungeonDirect.Server.Entities;
using DungeonDirect.Server.Middleware;
using eCommerceApp.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddHttpClient();
builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCors();
builder.Services.AddTransient<ExceptionMiddleware>();
builder.Services.AddIdentityApiEndpoints<User>(opt =>
{
    opt.User.RequireUniqueEmail = true;
})
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<StoreContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseMiddleware<ExceptionMiddleware>();
app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("https://localhost:5173");
});

app.UseAuthentication();
app.UseAuthorization();
app.MapGroup("api").MapIdentityApi<User>();

app.MapControllers();

DbInitializer.InitDb(app);

//Seed the database with initial data
//using (var scope = app.Services.CreateScope())
//{
//    var services = scope.ServiceProvider;
//    var context = services.GetRequiredService<StoreContext>();
//    var httpClient = services.GetRequiredService<HttpClient>();

//    context.Database.Migrate();

//    var seeder = new DbSeeder(httpClient, context);
//    await seeder.SeedAllAsync();
//}


app.Run();
