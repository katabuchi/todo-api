from rest_framework import serializers
from .models import ToDo

class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = (
            'text',
            'state',
            'due_at',
            'created_at',
            'updated_at'
        )
