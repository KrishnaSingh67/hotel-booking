
        function searchHotels() {
            const location = document.getElementById('location').value;
            const checkin = document.getElementById('checkin').value;
            const checkout = document.getElementById('checkout').value;
            const guests = document.getElementById('guests').value;

            if (location && checkin && checkout && guests) {
                alert(`Searching hotels in ${location} from ${checkin} to ${checkout} for ${guests} guests.`);
            } else {
                alert('Please fill all the fields before searching.');
            }
        }

        function bookHotel(hotelName) {
            alert(`You have selected to book: ${hotelName}. Proceeding to booking page...`);
        };


        function applyFilters() {
            const maxPrice = parseInt(document.getElementById("priceRange").value);
            const selectedStars = Array.from(document.querySelectorAll(".starFilter:checked"))
                .map(cb => parseInt(cb.value));

            document.querySelectorAll(".hotel-card").forEach(card => {
                const price = parseInt(card.getAttribute("data-price"));
                const star = parseInt(card.getAttribute("data-star"));

                let matchesPrice = price <= maxPrice;
                let matchesStar = selectedStars.length === 0 || selectedStars.includes(star);

                if (matchesPrice && matchesStar) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        }


     