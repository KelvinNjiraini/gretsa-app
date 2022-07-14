<template>
    <div>
        <base-dialog
            :show="openingsOnEdit"
            title="Add Job Opening"
            @close="closeDialogBox"
        >
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="field">Field</label>
                    <input
                        type="field"
                        name="field"
                        id="field"
                        v-model.trim="field"
                    />
                </div>
                <div class="form-group">
                    <label for="skills">Skills</label>
                    <input
                        type="skills"
                        name="skills"
                        id="skills"
                        v-model.trim="skills"
                    />
                </div>
                <div class="form-group">
                    <label for="years">Years of experience</label>
                    <input
                        type="years"
                        name="years"
                        id="years"
                        v-model.trim="years"
                    />
                </div>

                <base-button>Add opening</base-button>
            </form>
        </base-dialog>
        <div class="container">
            <base-card>
                <h1>Welcome to the company dashboard</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laboriosam, corporis optio incidunt quis porro iure itaque
                    cumque, sequi iste tempore assumenda tenetur! Sed dolorum
                    nihil nulla explicabo? Beatae incidunt ut id dolorem modi
                    quod sit, asperiores vitae amet eveniet accusamus!
                </p>
            </base-card>

            <div class="opening-title">
                <h1>Job openings</h1>
                <base-button @click="openJobOpeningDialog"
                    >Add Job opening</base-button
                >
            </div>
            <secondary-card v-for="(opening, index) in openings" :key="index">
                <h3>Field: {{ opening.field }}</h3>

                <ul>
                    <li v-for="(skill, index) in opening.skills" :key="index">
                        {{ skill }}
                    </li>
                </ul>
                <div class="bottom-card">
                    <span class="years"
                        >Years of experience: {{ opening.years }}</span
                    >
                    <span class="years"
                        >Current number of applicants:
                        {{ opening.applicants }}</span
                    >
                </div>
                <base-button mode="danger">Delete Opening</base-button>
            </secondary-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            skills: '',
            fields: '',
            years: '',
            openings: [
                {
                    field: 'Acounting',
                    skills: [
                        'Knowledge of Accounting Practices',
                        'Proficiency in Accounting Software',
                        'Ability to Prepare Financial Statements',
                        'Knowledge of General Business Practices',
                    ],
                    years: 3,
                    applicants: 10,
                },
                {
                    field: 'Agriculture',
                    skills: [
                        'Knowledge of Accounting Practices',
                        'Proficiency in Accounting Software',
                        'Ability to Prepare Financial Statements',
                        'Knowledge of General Business Practices',
                    ],
                    years: 3,
                    applicants: 6,
                },
                {
                    field: 'Plumbing',
                    skills: [
                        'Knowledge of Accounting Practices',
                        'Proficiency in Accounting Software',
                        'Ability to Prepare Financial Statements',
                        'Knowledge of General Business Practices',
                    ],
                    years: 3,
                    applicants: 17,
                },
            ],
            openingsOnEdit: false,
        };
    },
    methods: {
        openJobOpeningDialog() {
            this.openingsOnEdit = true;
        },
        closeDialogBox() {
            this.openingsOnEdit = false;
        },
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
</style>
