pipeline {
    agent any

    options {
        timeout(time: 30, unit: 'MINUTES')
    }
    stages {
       
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

   
post {
    always {
        publishHTML(target: [
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report',
            keepAll: true,
            alwaysLinkToLastBuild: true,
            allowMissing: true
        ])

        archiveArtifacts(
            artifacts: 'test-results/**/*, playwright-report/**/*, allure-results/**/*',
            allowEmptyArchive: true,
            fingerprint: true
        )
    }
}
}
