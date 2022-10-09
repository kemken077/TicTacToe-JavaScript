function Square(x, y, w, h, ctx, actor = null) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.ctx = ctx;
  this.actor = actor;
  this._stroke_style = 'black';
}

Square.prototype.checkForActor = function(ctx) {
  ctx.fillStyle = this._stroke_style;
  ctx.font = '30px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(this.actor, this.x + this.w / 2, this.y + this.height / 2 + 10)
};

Square.prototype.draw = function() {
  this.ctx.strokeStyle = this._stroke_style;
  this.ctx.strokeRect(this.x, this.y, this.w, this.h);

  if (this.actor) {
    this.checkForActor(this.ctx);
  }
};

export default Square;
