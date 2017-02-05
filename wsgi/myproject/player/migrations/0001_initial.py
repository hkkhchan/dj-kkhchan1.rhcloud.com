# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Players',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.CharField(max_length=20)),
                ('login_id', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=40)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('password', models.CharField(max_length=40)),
            ],
            options={
                'ordering': ['created_date'],
            },
        ),
    ]
