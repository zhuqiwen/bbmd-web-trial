# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-11-24 03:02
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bbmdweb', '0004_lowdoesextrapolation_run'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lowdoesextrapolation',
            name='bmd_analysis_model',
        ),
        migrations.AddField(
            model_name='lowdoesextrapolation',
            name='bmd',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='low_dose_extrapolations', to='bbmdweb.BMDAnalysis'),
            preserve_default=False,
        ),
    ]
