# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-11-24 05:45
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bbmdweb', '0007_auto_20171123_2338'),
    ]

    operations = [
        migrations.AddField(
            model_name='lowdoesextrapolation',
            name='run',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='low_dose_extrapolations', to='bbmdweb.Run'),
        ),
    ]
