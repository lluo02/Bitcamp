# Generated by Django 4.0.3 on 2022-04-10 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('person', '0005_alter_person_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='name',
            field=models.TextField(default='foo', max_length=120),
        ),
    ]