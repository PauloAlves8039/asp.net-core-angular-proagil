using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace ProAgil.Domain.Identity
{
    /// <summary>
    /// Classe responsável pela atribuição de papeis implementados pelo Identity.
    /// </summary>
    public class Role : IdentityRole<int>
    {
        public List<UserRole> UserRoles { get; set; }
    }
}
