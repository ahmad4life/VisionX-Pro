from groq import Groq

client = Groq(api_key="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")

# List available models
models = client.models.list()

print("Available Groq models:")
for model in models.data:
    print(f"- {model.id}") 