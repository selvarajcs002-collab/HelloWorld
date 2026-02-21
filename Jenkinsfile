pipeline{
    agent any

    environment{
        DOCKER_IMAGE = "selvaraj751998/helloworld"
    }
    
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
        stage('Build the Image'){
            steps{
                bat 'docker build -t %DOCKER_IMAGE%:%BUILD_NUMBER% .'
            }
        }
        stage('Push the Image'){
            steps{
                withCredentials([usernamePassword(
                    credentialsId:'dockerhub-creds',
                    usernameVariable:'DOCKER_USER',
                    passwordVariable:'DOCKER_PASS'
                )]){
                   bat '''
                        echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                        docker push %DOCKER_IMAGE%:%BUILD_NUMBER%
                    '''
                }
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