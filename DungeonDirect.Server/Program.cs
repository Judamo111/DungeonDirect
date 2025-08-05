using DungeonDirect.Server.Data.seeders;
using eCommerceApp.Data;
using Microsoft.EntityFrameworkCore;
using System;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddHttpClient();
builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:5173");
});

app.MapControllers();

//DbInitializer.InitDb(app);

// Seed the database with initial data
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
var seeder = new WeaponSeeder(
    services.GetRequiredService<HttpClient>(),
    services.GetRequiredService<StoreContext>()
);
await seeder.SeedWeaponsAsync();


app.Run();
