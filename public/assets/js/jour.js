const ctx = document.getElementById("myChart").getContext("2d");

const data = {
  labels: ["Bénéfice", "Recette"],
  datasets: [
    {
      label: "Statistiques du Jour",
      data: [300, 800], // Remplacez par vos données
      backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 159, 64, 0.6)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 159, 64, 1)"],
      borderWidth: 2,
      hoverOffset: 10,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 14,
        },
        color: "#4A4A4A",
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let value = context.raw;
          return `${context.label}: ${value}€`;
        },
      },
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      titleFont: {
        size: 16,
      },
      bodyFont: {
        size: 14,
      },
    },
  },
};

new Chart(ctx, {
  type: "doughnut", // Graphique en beignet pour un style moderne
  data: data,
  options: options,
});
