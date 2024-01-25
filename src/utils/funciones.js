// util/funciones.js
import { ref } from 'vue';
//Oferta del dia timer
export const useCountdown = () => {
  const countdown = ref('');

  const calculateCountdown = () => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const updateCountdown = () => {
      const now = new Date();
      const difference = endDate - now;

      const hours = Math.floor((difference % (1000 * 60 * 60 * 12)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      countdown.value = `${hours}h ${minutes}m ${seconds}s`;

      if (difference <= 0) {
        clearInterval(interval);
        countdown.value = 'Deal expired';
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    updateCountdown();
  };

  return { countdown, calculateCountdown };
};
