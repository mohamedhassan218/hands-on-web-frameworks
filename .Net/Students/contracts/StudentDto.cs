namespace Students.contrcts;

public record class StudentDto(
    int Id,
    string Name,
    string Gender,
    DateOnly BirthDate
);
