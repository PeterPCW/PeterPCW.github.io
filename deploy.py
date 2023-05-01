import os
# import shutil
# import imgkit
import time

# Run the API tests
# os.system("coverage run -m pytest")

# Compile the ExperienceChart.py file into ExperienceChart.html
os.system("cd src/python/bokeh && python ExperienceChart.py")
# os.system("cd python/bokeh && bokeh serve ExperienceChart.py --save --show --port 5001 --allow-websocket-origin=peterpcw.github.io:443 --allow-websocket-origin=localhost:5001 && cd .. && cd ..")

# Back to root directory
os.system('cd .. && cd .. && cd ..')

# Build the React app - includes eslint and jest per package.json
os.system("npm run lintbuild")

# Ask for commit message with timeout
print("Please enter a commit message (30s timeout):")
try:
    commit_msg = input()
    time.sleep(30)  # Wait for 30 seconds
except:
    commit_msg = "commit from deploy"  # Timeout, set default message

# Commit to deploy
os.system(f'git add . && git commit -m "{commit_msg}" && git push')


#### Old Code #### replace with copy to prod on test pass or something
#print('# Add gh-pages remote and deploy to gh-pages')
#os.system("git remote add origin https://github.com/PeterPCW/Resume-Site.git && npm run deploy")