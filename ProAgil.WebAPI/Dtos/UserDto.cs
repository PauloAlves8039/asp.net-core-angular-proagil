namespace ProAgil.WebAPI.Dtos
{
    /// <summary>
    /// Classe responsável pela utilização da entidade User como DTO.
    /// </summary>
    public class UserDto
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }
    }
}
