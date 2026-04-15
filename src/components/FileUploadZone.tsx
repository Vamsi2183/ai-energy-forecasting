import { useState, useCallback } from "react";
import { Upload, FileCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FileUploadZone() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<string | null>(null);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f?.name.endsWith(".csv")) setFile(f.name);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f?.name.endsWith(".csv")) setFile(f.name);
  }, []);

  return (
    <motion.div
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`glass rounded-xl p-8 border-2 border-dashed transition-all duration-300 cursor-pointer text-center ${
        isDragging ? "border-primary bg-primary/5" : file ? "border-accent/50" : "border-border/50"
      }`}
      whileHover={{ scale: 1.01 }}
    >
      <input type="file" accept=".csv" onChange={handleFileInput} className="hidden" id="csv-upload" />
      <label htmlFor="csv-upload" className="cursor-pointer block">
        <AnimatePresence mode="wait">
          {file ? (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-accent" />
              </div>
              <p className="text-foreground font-medium">{file}</p>
              <p className="text-sm text-muted-foreground">Click to replace</p>
            </motion.div>
          ) : (
            <motion.div key="upload" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">Drop your CSV here</p>
              <p className="text-sm text-muted-foreground">or click to browse</p>
            </motion.div>
          )}
        </AnimatePresence>
      </label>
    </motion.div>
  );
}
