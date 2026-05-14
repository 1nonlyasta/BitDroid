# Prototypes & Experiments

This directory is reserved for early-stage implementation attempts and experimental code.

## Upcoming Prototypes

### 1. `vision_to_text.py`
- Objective: Capture screen via ADB/scrcpy and convert it to a semantic text description.
- Tools: `scrcpy`, `pytesseract` or `easyocr`.

### 2. `bitnet_inference_test.py`
- Objective: Run a simple reasoning loop using a local BitNet model on the development workstation.
- Tools: `bitnet.cpp` Python bindings or subprocess calls.

### 3. `action_loop.py`
- Objective: Combine vision and control to perform a simple task (e.g., "Find the Calculator app and tap it").
- Tools: `uiautomator2`.

## Data for Experiments
See `/datasets` for sample UI hierarchies and screenshots used for benchmarking grounding accuracy.
