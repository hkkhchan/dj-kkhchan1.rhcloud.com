from django.db import models

# Create your models here.
class Player(models.Model):
  name = models.CharField(max_length = 20)
  login_id = models.CharField(max_length = 20)
  email = models.EmailField(max_length = 40)
  created_date = models.DateTimeField(auto_now_add = True)
  password = models.CharField(max_length = 40)
  theme = models.SmallIntegerField(default=0)

  def __str__(self):
    return self.login_id

  class Meta:
    ordering = ['created_date']

