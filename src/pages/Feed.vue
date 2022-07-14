<template>
    <div class="container">
        <h2>My feed</h2>
        <ul>
            <li v-for="(opening, index) in openings" :key="index">
                <div>
                    <span> {{ index + 1 }}.</span>
                    <span class="course-name">{{ opening.field }}</span>
                </div>
                <base-button mode="flat" link to="/application-page"
                    >Apply</base-button
                >
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openings: [
                {
                    field: 'Financial Manager.',
                    skills: [
                        'Knowledge of Accounting Practices',
                        'Proficiency in Accounting Software',
                        'Ability to Prepare Financial Statements',
                        'Knowledge of General Business Practices',
                    ],
                    years: 3,
                },
                {
                    field: 'Software Developer',
                    skills: [
                        'Knowledge of Accounting Practices',
                        'Proficiency in Accounting Software',
                        'Ability to Prepare Financial Statements',
                        'Knowledge of General Business Practices',
                    ],
                    years: 3,
                },
                {
                    field: 'Plumbing Contractors',
                    skills: [
                        'Knowledge of Accounting Practices',
                        'Proficiency in Accounting Software',
                        'Ability to Prepare Financial Statements',
                        'Knowledge of General Business Practices',
                    ],
                    years: 3,
                },
            ],
        };
    },
    methods: {
        apply() {},
    },
};
</script>

<style scoped>
.container {
    max-width: 70vw;
    margin: 3rem auto;
}

h2 {
    margin: 1.3rem 0;
    font-size: 2.2rem;
}

ul {
    list-style: none;
    font-size: 1.4rem;
}

li {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
