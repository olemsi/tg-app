import { useState, useRef, useEffect } from 'react';
import type { Chart } from '../types/index.ts';
import { MAX_CHART_NAME } from '../hooks/useCharts.ts';

interface Props {
  charts: Chart[];
  activeChart: Chart | undefined;
  prefix: string;
  onSelect: (chartId: string) => void;
  onAdd: (name: string) => void;
  onRename: (chartId: string, name: string) => void;
  onDelete: (chartId: string) => void;
}

export function ChartSelector({
  charts, activeChart, prefix, onSelect, onAdd, onRename, onDelete,
}: Props) {
  const [mode, setMode] = useState<'idle' | 'add' | 'edit'>('idle');
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const maxSuffix = MAX_CHART_NAME - prefix.length - 1;

  useEffect(() => {
    if (mode !== 'idle') inputRef.current?.focus();
  }, [mode]);

  // Close panel when active chart changes (after add/delete)
  useEffect(() => { setMode('idle'); }, [activeChart?.id]);

  function startAdd() {
    setInput('');
    setMode('add');
  }

  function startEdit() {
    if (!activeChart) return;
    const dash = prefix + '-';
    setInput(activeChart.name.startsWith(dash) ? activeChart.name.slice(dash.length) : '');
    setMode('edit');
  }

  function submit() {
    const trimmed = input.trim();
    if (mode === 'add') {
      if (!trimmed) return;
      onAdd(`${prefix}-${trimmed}`);
    } else if (mode === 'edit' && activeChart) {
      onRename(activeChart.id, trimmed ? `${prefix}-${trimmed}` : prefix);
      setMode('idle');
    }
  }

  function handleDelete() {
    if (activeChart) onDelete(activeChart.id);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') submit();
    if (e.key === 'Escape') setMode('idle');
  }

  return (
    <div className="chart-selector">
      <div className="chart-pills">
        {charts.map(c => (
          <button
            key={c.id}
            type="button"
            className={`chart-pill${c.id === activeChart?.id ? ' active' : ''}`}
            onClick={() => c.id === activeChart?.id ? startEdit() : onSelect(c.id)}
          >
            {c.name}
          </button>
        ))}
        <button type="button" className="chart-pill chart-add" onClick={startAdd}>+</button>
      </div>

      {mode !== 'idle' && (
        <div className="chart-panel">
          <div className="chart-panel-row">
            <span className="chart-prefix">{prefix}-</span>
            <input
              ref={inputRef}
              className="chart-name-input"
              value={input}
              onChange={e => setInput(e.target.value.slice(0, maxSuffix))}
              onKeyDown={onKeyDown}
              placeholder="name"
              maxLength={maxSuffix}
            />
            <button type="button" className="chart-btn confirm" onClick={submit}>
              &#x2713;
            </button>
            <button type="button" className="chart-btn cancel" onClick={() => setMode('idle')}>
              &#x2715;
            </button>
          </div>
          {mode === 'edit' && charts.length > 1 && (
            <button type="button" className="chart-danger" onClick={handleDelete}>
              Delete this chart
            </button>
          )}
        </div>
      )}
    </div>
  );
}
