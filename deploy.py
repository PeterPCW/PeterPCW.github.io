import os
import shutil
import imgkit

# Run the API tests
# os.system("coverage run -m pytest")

# Compile the ExperienceChart.py file into ExperienceChart.html
os.system("cd src/python/bokeh && python ExperienceChart.py")
# os.system("cd python/bokeh && bokeh serve ExperienceChart.py --save --show --port 5001 --allow-websocket-origin=peterpcw.github.io:443 --allow-websocket-origin=localhost:5001 && cd .. && cd ..")

# Back to root directory
os.system('cd .. && cd .. && cd ..')

# Build the React app - includes eslint and jest per package.json
os.system("npm run build")

# Commit to deploy
os.system('git add . && git commit -m "commit for deploy" && git push')

# Add gh-pages remote and deploy to gh-pages
print('# Add gh-pages remote and deploy to gh-pages')
os.system("git remote add origin https://github.com/PeterPCW/Resume-Site.git && npm run deploy")