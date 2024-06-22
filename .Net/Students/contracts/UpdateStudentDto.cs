using System.ComponentModel.DataAnnotations;

namespace Students.contrcts;

public record class UpdateStudentDto(
    [Required][StringLength(30)] string Name,
    [Required][StringLength(6)] string Gender,
    [Required] DateOnly BirthDate
);
