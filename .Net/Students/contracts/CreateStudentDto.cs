namespace Students.contrcts;

public record class CreateStudentDto(
    string Name,
    string Gender,
    DateOnly BirthDate
);
