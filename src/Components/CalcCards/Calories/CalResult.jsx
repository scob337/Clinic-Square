
export default function CalResult({Cal}) {
  return (
    <div >
                <p className="font-bold">
                    Your caloric need per day ={" "}
                    <strong>{Cal.toFixed(2)} Calorie / day</strong>
                    </p>
    </div>
  )
}
