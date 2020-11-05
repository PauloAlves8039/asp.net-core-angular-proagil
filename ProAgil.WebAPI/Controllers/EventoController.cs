using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProAgil.Domain;
using ProAgil.Repository;

namespace ProAgil.WebAPI.Controllers
{
    /// <summary>
    /// Controlador responsável pelas ações da entidade Evento.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class EventoController : ControllerBase
    {
        public readonly IProAgilRepository _repo;
        public EventoController(IProAgilRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var results = await _repo.GetAllEventoAsync(true);
                return Ok(results);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Erro ao pesquisar registros: " + ex.Message);
            } 
        }

        [HttpGet("{EventoId}")]
        public async Task<IActionResult> Get(int EventoId)
        {
            try
            {
                var results = await _repo.GetEventoAsyncById(EventoId, true);
                return Ok(results);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Erro ao pesquisar registro: " + ex.Message);
            } 
        }

        [HttpGet("getByTema/{tema}")]
        public async Task<IActionResult> Get(string tema)
        {
            try
            {
                var results = await _repo.GetAllEventoAsyncByTema(tema, true);
                return Ok(results);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Erro ao pesquisar registro: " + ex.Message);
            } 
        }

        [HttpPost]
        public async Task<IActionResult> Post(Evento model)
        {
            try
            {
                _repo.Add(model);

                if (await _repo.SaveChangesAsync()) 
                {
                    return Created($"/api/evento/{model.Id}", model);
                }
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Erro ao inserir registro: " + ex.Message);
            }

            return  BadRequest();
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> Put(int Id, Evento model)
        {
            try
            {
                var evento = await _repo.GetEventoAsyncById(Id, false);
                if (evento == null) return NotFound();
                
                _repo.Update(model);

                if (await _repo.SaveChangesAsync()) 
                {
                    return Created($"/api/evento/{model.Id}", model);
                }
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Erro ao atualizar registro: " + ex.Message);
            }

            return  BadRequest();
        }

        [HttpDelete("{Id)}")]
        public async Task<IActionResult> Delete(int Id)
        {
            try
            {
                var evento = await _repo.GetEventoAsyncById(Id, false);
                if (evento == null) return NotFound();
                
                _repo.Update(evento);

                if (await _repo.SaveChangesAsync()) 
                {
                    return Ok();
                }
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Erro ao excluir registro: " + ex.Message);
            }

            return  BadRequest();
        }

    }
}