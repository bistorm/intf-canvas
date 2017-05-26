
//Funciones CANVAS 2D

function icanvas_draw_rectangle(id_canvas, x, y, width, height, fill_style, stroke_style, line_width)
{
	var canvas = document.getElementById(id_canvas);
	var ctx = canvas.getContext("2d");
	ctx.beginPath(); 	
	ctx.rect(x,y,width,height);

	stroke_style = stroke_style || "#000";
	line_width = line_width || "1";
	
	if(fill_style != null && fill_style != undefined)
	{
		ctx.fillStyle = fill_style;
		ctx.fill();	
	}

	ctx.strokeStyle = stroke_style;
	
	if (line_width!=0)
	{
		ctx.lineWidth=line_width;
		ctx.stroke();
	}
	
}

function icanvas_draw_circle(id_canvas, x, y, radius, fill_style, stroke_style, line_width)
{
	var canvas = document.getElementById(id_canvas);
	var ctx = canvas.getContext("2d");
	ctx.beginPath(); 	
	ctx.arc(x,y,radius,0,2*Math.PI);
	
	if(fill_style != null && fill_style != undefined)
	{
		ctx.fillStyle = fill_style;
		ctx.fill();	
	}

	if(stroke_style != null && stroke_style != undefined)
	{
		ctx.strokeStyle = stroke_style;
	}
	else
	{
		ctx.strokeStyle = "#FFF";
	}	

	if (line_width!=0)
	{
		if(line_width === null || line_width === undefined)
		{
			ctx.lineWidth="1";
		}
		else{
			ctx.lineWidth=line_width;
		}
		ctx.stroke();
	}
	
}


function icanvas_draw_line(id_canvas, x1, y1, x2, y2, style, line_width){
	var canvas = document.getElementById(id_canvas);
	var ctx = canvas.getContext("2d");	
	ctx.beginPath(); 
	if(style != null && style != undefined)
	{
		ctx.strokeStyle = style;
	}
	if(line_width != null && line_width != undefined)
	{
		ctx.lineWidth=line_width;
	}
	else
	{
		ctx.lineWidth="1";
	}
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}

function icanvas_draw_text(id_canvas, x, y, text, font, style, align)
{
	var canvas = document.getElementById(id_canvas);
	var ctx = canvas.getContext("2d");	
	ctx.beginPath(); 
	if(font != null && font != undefined)
	{
		ctx.font = font;
	}
	else
	{
		ctx.font = "10px sans-serif";
	}

	if(style != null && style != undefined)
	{
		ctx.fillStyle = style;
	}
	else{
		ctx.fillStyle = "#FFF";
	}

	if(align != null && align != undefined)
	{
		ctx.textAlign = align;
	}
	else
	{
		ctx.textAlign = "start";
	}

	ctx.fillText(text,x,y);
}

