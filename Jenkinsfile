
pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/annguyez/test-nodejs.git'
            }
        }   

        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

