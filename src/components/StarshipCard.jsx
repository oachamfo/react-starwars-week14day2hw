export default function StarshipCard({ starship }) {
  return (
    <div className="starship-card">
      <span className="starship-card-header">Starship Card</span>
      <br />
      {starship?.name}
    </div>
  );
}
