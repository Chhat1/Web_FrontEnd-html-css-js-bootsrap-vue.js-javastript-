
$(function () {

    $("#loading").hide();
    

    $.ajax({
        url: "https://fakestoreapi.com/products",
        type: "GET",
        beforeSend: function () {
            $("#loading").show();
        },
        success: function (response) {
            $("#loading").hide();
            $("#status").hide();
            $("#animation").hide();
            console.log("Date request successfully.");
            let mainCard = "";
            response.forEach(data => {
                mainCard += `
                    <div id="cardHover" class="col-12 col-sm-6 col-lg-3">
                        <div class="card h-100 shadow border-0 rounded-4">
                            <div class="card-header p-2">
                                <!-- Image -->
                                <div class="overflow-hidden rounded-top-4" style="height: 250px;">
                                    <img src="${data.image}" class="card-img-top h-100 w-100 object-fit-cover" alt="Product">
                                </div>
                            </div>
                            <!--Card Body -->
                            <div class="card-body d-flex flex-column">
                                <h6 class="fw-bold mb-1">${data.title}</h6>
                                <p class="text-muted small mb-2">
                                        Lorem ipsum dolor sit amet.
                                </p>
                                <!-- Price -->
                                <h5 class="text-danger fw-bold mb-3">$ ${data.price}</h5>
                                <!-- Button -->
                                <button class="btn btn-danger fw-medium mt-auto rounded-3">
                                    <i class="bi fw-medium bi-cart-plus"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;

            });
            $("#main-card").html(mainCard);
        },
        error: function () {
            console.log("Data error",error);
        },
        complete: function () {
            console.log("Data Request Successfully.");
            $("#loading").hide();
        }
    });
})