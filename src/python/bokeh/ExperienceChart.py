from math import pi
import pandas as pd
from bokeh.palettes import Category20c
from bokeh.plotting import figure, save
from bokeh.transform import cumsum
from bokeh.models import LabelSet, ColumnDataSource, Expression
from bokeh.io import curdoc

curdoc().theme = "dark_minimal" # setting the theme to dark
curdoc().background = "#333333" # setting the background color

x = {
    'Python': 4,
    'React': 3,
    'Node': 2,
    'TypeScript': 1,
    'C++': 1
}

colors = ['#ff6300', '#00ff00', '#ff0085', '#0085ff', '#8500ff']

data = pd.Series(x).reset_index(name='value').rename(columns={'index': 'language'})
data['angle'] = data['value']/data['value'].sum() * 2*pi
data['color'] = colors

p = figure(sizing_mode='scale_width', 
           aspect_scale=.85, 
           toolbar_location=None, 
           tools='hover', 
           tooltips="@language: @value", 
           x_range=(-0.125, 1.125),
           y_range=(-0.125, 1.125))

p.wedge(x=.5, y=.5, radius=0.5,
        start_angle=cumsum('angle', include_zero=True), end_angle=cumsum('angle'),
        line_color="#bbbbbb", 
        fill_color='color', 
        legend_field='language', 
        source=data)

# Add the inner circle
p.circle(x=.5, y=.5, radius=0.33, line_color='#bbbbbb', fill_color='#333333')

# apply the theme to the plot
p.background_fill_color = '#333333'
p.border_fill_color = '#333333'
p.legend.background_fill_color = '#333333'
p.legend.border_line_color = '#333333'
p.legend.label_text_color = "#bbbbbb"
p.legend.label_text_font_size = '18pt'
p.legend.location = 'center'
p.align = 'center'
p.title.align = 'center'
p.outline_line_color = None
p.axis.axis_label = None
p.axis.visible = False
p.grid.grid_line_color = None
p.title.text_font_size = '48pt'

save(p, filename='ExperienceChart.html')