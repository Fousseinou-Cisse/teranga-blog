export default function ArticleCard({ title,body,estFavori,onToggleFavori }) {
  return (
    <div className="article-card">
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={onToggleFavori}>
{estFavori ? "Retirer de favori ": "Mettre en favori"}      </button>
    </div>
  )
}