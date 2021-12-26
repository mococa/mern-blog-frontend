getEnv(){
    echo $(grep $1 deploy.env | cut -d '=' -f2)
}

echo "Initiating build"
yarn build
clear
echo "Preparing deploy.."

zip -r -qq build.zip build

URL_REQUEST="https://transfer.sh/build"
URL="$(curl -s --upload-file ./build.zip $URL_REQUEST)"
rm ./build.zip

SID=$(getEnv SID)
REPL_ID=$(getEnv REPL_ID)
REPLIT_API=$(getEnv REPLIT_API)
COMMAND="sh%20./get-build.sh%20$URL"

API_URL="$REPLIT_API/$REPL_ID?sid=$SID&command=$COMMAND"

echo "Deploying replit..."

curl -s $API_URL > /dev/null

echo "Done! Check the result here: $(getEnv HOMEPAGE)"

#echo "If deploy has failed, please, visit $API_URL to re-run it."