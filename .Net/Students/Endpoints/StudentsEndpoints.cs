using Students.contrcts;
namespace Students.Endpoints;

public static class StudentsEndpoints
{
    private static readonly List<StudentDto> students = [
        new (1, "Mohamed", "Male", new DateOnly(2002, 8, 21)),
        new (2, "Mona", "Female", new DateOnly(2002, 9, 20)),
        new (3, "Mostafa", "Male", new DateOnly(2003, 10, 5)),
        new (4, "Esraa", "Female", new DateOnly(2004, 11, 2)),
        new (5, "Hassan", "Male", new DateOnly(2005, 12, 3))
    ];

    // This called extension method.
    public static RouteGroupBuilder MapStudentsEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("students")
            .WithParameterValidation();     // This line to validate all routes in the group.

        // GET /students
        group.MapGet("/", () => students);

        // GET /students/1
        group.MapGet("/{id}", (int id) =>
        {
            StudentDto? student = students.Find(game => game.Id == id);

            return student is null ? Results.NotFound() : Results.Ok(student);
        }).WithName("GetStudent");    // Specify a name to the endpoint.

        // POST /students
        group.MapPost("/", (CreateStudentDto newStudent) =>
        {
            StudentDto student = new(
                students.Count() + 1,
                newStudent.Name,
                newStudent.Gender,
                newStudent.BirthDate
            );

            students.Add(student);

            // Return 201 created status.
            return Results.CreatedAtRoute("GetStudent", new { id = student.Id }, student);
        });

        // PUT /students/{id}
        group.MapPut("/{id}", (int id, UpdateStudentDto updatedStudent) =>
        {
            var index = students.FindIndex(student => student.Id == id);

            if (index == -1)
                return Results.NotFound();

            students[index] = new StudentDto(id, updatedStudent.Name,
                updatedStudent.Gender,
                updatedStudent.BirthDate);

            return Results.NoContent();
        });

        // DELETE /students/{id}
        group.MapDelete("/{id}", (int id) =>
        {
            students.RemoveAll(student => student.Id == id);

            return Results.NoContent();
        });

        return group;
    }

}