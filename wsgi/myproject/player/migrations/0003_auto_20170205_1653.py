# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0002_auto_20170205_1341'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='theme',
            field=models.SmallIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='player',
            name='email',
            field=models.EmailField(max_length=40),
        ),
    ]
