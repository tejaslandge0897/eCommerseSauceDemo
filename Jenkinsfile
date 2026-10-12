
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out Playwright project'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
    environment {
        BASE_URL = 'https://www.saucedemo.com'
    }
    steps {
        bat 'npx playwright test'
    }
}
    }
}
