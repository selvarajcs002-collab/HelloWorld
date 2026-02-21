pipeline{
    agent any
    
    tools{
        nodejs 'Nodejs'
    }
    stages{
        stage('checkout scm'){
            steps{
                checkout scm
            }
        }
        stage('Build'){
            steps{
                sh 'npm install'
            }
        }
        stage('Start the Application'){
            steps{
                sh 'npm start'
            }
        }
        stage('Run the Test Cases'){
            steps{
                sh 'npm test'
            }
        }
        post{
            success{
                echo 'Build Success'
            }
            failure{
                echo 'Build Failed! Please try again.'
            }
        }
    }
}