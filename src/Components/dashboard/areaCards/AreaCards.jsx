import AreaCard from "./AreaCard";
import "./AreaCards.css";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Earning",
          value: "$20.4K",
          // text: "We have sold 123 items.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Orders",
          value: "$8.2K",
          // text: "Available to payout",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Balance",
          value: "$18.2K",
          // text: "Available to payout",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Total Sales",
          value: "$89K",
          // text: "Available to payout",
        }}
      />
    </section>
  );
};

export default AreaCards;
