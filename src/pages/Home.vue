<template>
    <div class="container">
        <h1>Welcome to your dashboard</h1>
        <base-card>
            <h3>Personal details</h3>
            <ul>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, optio.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, optio.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, optio.
                </li>
            </ul>
            <span>County: Kiambu</span>
        </base-card>
        <div class="applications">
            <div class="application-heading">
                <h1>Current applications</h1>
                <base-button link to="/feed">Go to my feed</base-button>
            </div>
            <ul>
                <li
                    v-for="(app, index) in applications"
                    :key="index"
                    class="application"
                >
                    <span>{{ app.role }}</span>
                    <span>{{ app.status }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            applications: [
                {
                    role: 'Project manager',
                    status: 'Awaiting response',
                },
                {
                    role: 'Land inspector',
                    status: 'Accepted',
                },
                {
                    role: 'Human Resource manager',
                    status: 'Awaiting response',
                },
            ],
        };
    },
};
</script>
<style scoped>
.container {
    max-width: 70vw;
    margin: 3rem auto;
}
h1 {
    margin-bottom: 1rem;
}
p {
    margin-bottom: 1rem;
    font-size: 1.4rem;
}
ul {
    list-style: none;
    font-size: 1.4rem;
}
li {
    margin-bottom: 1rem;
}
h3 {
    font-size: 1.8rem;
    margin: 1rem 0;
}
.years {
    font-size: 1.4rem;
    font-weight: bold;
    display: block;
    margin-bottom: 1rem;
}
.opening-title {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
}

.input-group {
    margin: 0.5rem 0;
}

input {
    display: inline-block;
    width: 70%;
    border: 1px solid #ccc;
    font: inherit;
    margin-right: 1rem;
    padding: 0.3rem 0.5rem;
}

input:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}
.application {
    display: flex;
    justify-content: space-between;
    width: 70%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
    padding: 2rem;
}
.application-heading {
    display: flex;
    justify-content: space-between;
}
</style>
