using Students.Endpoints;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// GET /
app.MapGet("/", () => "Hello .NET!");

// Clean our file.
app.MapStudentsEndpoints();

app.Run();
