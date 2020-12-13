namespace ProAgil.WebAPI.Dtos
{
    /// <summary>
    /// Classe responsável pelas propreidades de login do usuário.
    /// </summary>
    public class UserLoginDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
