<template>
    <div class="elements">
        <div class="element">
            Special sponsor
        </div>

        <div class="element">
            <img src="https://vuejs.org/images/sponsors/hbuilder.avif" alt="Image">
        </div>

        <div class="element">
            Advanced IDE for Vue
        </div>
    </div>
    <div class="p-4 max-mid-w mt-4">
        <div class="row p-5">
            <div class="col">
                <h6>
                    Approachable
                </h6>
                <p class="mc">
                    Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.
                </p>
            </div>
            <div class="col">
                <h6>
                    Performant
                </h6>
                <p class="mc">
                    Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.
                </p>
            </div>
            <div class="col">
                <h6>
                    Versatile
                </h6>
                <p class="mc">
                    A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.elements {
    margin-top: 6rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border: 1px solid #c0c0c0b3;
    border-left: none;
    border-right: none;
}
.element {
    margin: 0 5px;
    padding: 10px;
    color: #929292;
    font-size: 15px;
}
img {
    width: 100px;
}

.col h6 {
    font-size: 21px;
    margin-bottom: 1rem;
}

.col p {
    max-width: 220px;
}
</style>