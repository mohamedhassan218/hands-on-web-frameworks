namespace Students.contrcts;

public record class UpdateStudentDto(
    string Name,
    string Gender,
    DateOnly BirthDate
);
