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
                bat 'npm install'
            }
        }
        stage('Start the Application'){
            steps{
                bat 'npm start'
            }
        }
        stage('Run the Test Cases'){
            steps{
                bat 'npm test'
            }
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