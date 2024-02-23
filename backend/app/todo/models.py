from django.db import models

# Create your models here.
class ToDo(models.Model):
    class Status(models.IntegerChoices):
        READY = 1, 'Ready'
        DOING = 2, 'Doing'
        DONE = 3, 'Done'
    text = models.TextField(
        max_length=200,
        help_text='やること',
        default=''
    )
    state = models.IntegerField(
        choices = Status.choices,
        default = Status.READY
    )
    due_at = models.DateField(
        help_text = 'いつやるのか'
    )
    created_at = models.DateField(
        auto_now_add = True,
        help_text = '作成日'
    )
    updated_at = models.DateField(
        auto_now = True,
        help_text = '更新日'
    )