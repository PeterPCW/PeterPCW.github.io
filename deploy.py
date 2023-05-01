import os
# import shutil
# import imgkit
import time
import msvcrt

# Run the API tests
# os.system("coverage run -m pytest")

# Compile the ExperienceChart.py file into ExperienceChart.html
os.system("cd src/python/bokeh && python ExperienceChart.py --no-browser")
# os.system("cd python/bokeh && bokeh serve ExperienceChart.py --save --show --port 5001 --allow-websocket-origin=peterpcw.github.io:443 --allow-websocket-origin=localhost:5001 && cd .. && cd ..")

# Back to root directory
os.system('cd .. && cd .. && cd ..')

# Build the React app - includes eslint and jest per package.json
os.system("npm run lintbuild")

def get_commit_message(timeout=30):
    start_time = time.time()
    message = ""
    while True:
        if msvcrt.kbhit():  # Check if a key has been pressed
            char = msvcrt.getwche()  # Read a character without waiting for a newline
            if char == '\r':  # If the Enter key was pressed, exit the loop
                break
            message += char  # Append the character to the message
        elif time.time() - start_time > timeout:  # If the timeout has elapsed, exit the loop
            break
    if not message:
        message = "commit from deploy"  # Use default message if no input was received
    return message

commit_message = get_commit_message()
os.system(f'git add . && git commit -m "{commit_message}" && git push')

#### Old Code #### replace with copy to prod on test pass or something
#print('# Add gh-pages remote and deploy to gh-pages')
#os.system("git remote add origin https://github.com/PeterPCW/Resume-Site.git && npm run deploy")